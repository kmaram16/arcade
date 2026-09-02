import { useEffect, useRef, useState } from 'react';
import './Social.css';
import { Net, convId, type ChatMsg, type Peer, type Signal } from './net';
import type { Lang } from './i18n';

const NAME_KEY = 'arcade.name';
const ICE: RTCConfiguration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478' }
  ]
};

type Call = { peerId: string; name: string; video: boolean; state: 'calling' | 'ringing' | 'in' };

// Compact localized labels for the panel.
type CS = {
  title: string;
  online: string;
  chats: string;
  namePrompt: string;
  namePh: string;
  enter: string;
  you: string;
  self: string;
  typeMsg: string;
  send: string;
  callAudio: string;
  callVideo: string;
  group: string;
  createGroup: (n: number) => string;
  cancel: string;
  noOne: string;
  incoming: (n: string) => string;
  accept: string;
  decline: string;
  hangUp: string;
  calling: string;
  inCall: string;
  needName: string;
  empty: string;
};

const S: Record<Lang, CS> = {
  es: { title: 'Personas', online: 'En línea', chats: 'Chats', namePrompt: '¿Cómo te llamas?', namePh: 'Tu nombre', enter: 'Entrar', you: 'Tú', self: '(tú)', typeMsg: 'Escribe un mensaje…', send: 'Enviar', callAudio: 'Llamar', callVideo: 'Vídeo', group: '+ Grupo', createGroup: (n) => `Crear grupo (${n})`, cancel: 'Cancelar', noOne: 'No hay nadie más en línea ahora mismo.', incoming: (n) => `${n} te llama`, accept: 'Aceptar', decline: 'Rechazar', hangUp: 'Colgar', calling: 'Llamando…', inCall: 'En llamada', needName: 'Pon tu nombre para chatear y llamar.', empty: 'Elige a alguien para chatear.' },
  en: { title: 'People', online: 'Online', chats: 'Chats', namePrompt: 'What is your name?', namePh: 'Your name', enter: 'Enter', you: 'You', self: '(you)', typeMsg: 'Type a message…', send: 'Send', callAudio: 'Call', callVideo: 'Video', group: '+ Group', createGroup: (n) => `Create group (${n})`, cancel: 'Cancel', noOne: 'Nobody else is online right now.', incoming: (n) => `${n} is calling`, accept: 'Accept', decline: 'Decline', hangUp: 'Hang up', calling: 'Calling…', inCall: 'In call', needName: 'Set your name to chat and call.', empty: 'Pick someone to chat with.' },
  pt: { title: 'Pessoas', online: 'Online', chats: 'Conversas', namePrompt: 'Qual é o seu nome?', namePh: 'Seu nome', enter: 'Entrar', you: 'Você', self: '(você)', typeMsg: 'Escreva uma mensagem…', send: 'Enviar', callAudio: 'Ligar', callVideo: 'Vídeo', group: '+ Grupo', createGroup: (n) => `Criar grupo (${n})`, cancel: 'Cancelar', noOne: 'Ninguém mais online agora.', incoming: (n) => `${n} está ligando`, accept: 'Aceitar', decline: 'Recusar', hangUp: 'Desligar', calling: 'Ligando…', inCall: 'Em chamada', needName: 'Defina seu nome para conversar e ligar.', empty: 'Escolha alguém para conversar.' },
  fr: { title: 'Personnes', online: 'En ligne', chats: 'Discussions', namePrompt: 'Comment tu t’appelles ?', namePh: 'Ton nom', enter: 'Entrer', you: 'Toi', self: '(toi)', typeMsg: 'Écris un message…', send: 'Envoyer', callAudio: 'Appeler', callVideo: 'Vidéo', group: '+ Groupe', createGroup: (n) => `Créer un groupe (${n})`, cancel: 'Annuler', noOne: 'Personne d’autre en ligne pour l’instant.', incoming: (n) => `${n} t’appelle`, accept: 'Accepter', decline: 'Refuser', hangUp: 'Raccrocher', calling: 'Appel…', inCall: 'En appel', needName: 'Mets ton nom pour discuter et appeler.', empty: 'Choisis quelqu’un pour discuter.' },
  de: { title: 'Leute', online: 'Online', chats: 'Chats', namePrompt: 'Wie heißt du?', namePh: 'Dein Name', enter: 'Los', you: 'Du', self: '(du)', typeMsg: 'Nachricht schreiben…', send: 'Senden', callAudio: 'Anrufen', callVideo: 'Video', group: '+ Gruppe', createGroup: (n) => `Gruppe erstellen (${n})`, cancel: 'Abbrechen', noOne: 'Gerade ist niemand sonst online.', incoming: (n) => `${n} ruft an`, accept: 'Annehmen', decline: 'Ablehnen', hangUp: 'Auflegen', calling: 'Ruft an…', inCall: 'Im Anruf', needName: 'Gib deinen Namen ein zum Chatten und Anrufen.', empty: 'Wähle jemanden zum Chatten.' },
  it: { title: 'Persone', online: 'Online', chats: 'Chat', namePrompt: 'Come ti chiami?', namePh: 'Il tuo nome', enter: 'Entra', you: 'Tu', self: '(tu)', typeMsg: 'Scrivi un messaggio…', send: 'Invia', callAudio: 'Chiama', callVideo: 'Video', group: '+ Gruppo', createGroup: (n) => `Crea gruppo (${n})`, cancel: 'Annulla', noOne: 'Nessun altro online al momento.', incoming: (n) => `${n} ti sta chiamando`, accept: 'Accetta', decline: 'Rifiuta', hangUp: 'Riaggancia', calling: 'Chiamata…', inCall: 'In chiamata', needName: 'Imposta il tuo nome per chattare e chiamare.', empty: 'Scegli qualcuno con cui chattare.' },
  zh: { title: '好友', online: '在线', chats: '聊天', namePrompt: '你叫什么名字？', namePh: '你的名字', enter: '进入', you: '你', self: '（你）', typeMsg: '输入消息…', send: '发送', callAudio: '通话', callVideo: '视频', group: '+ 群组', createGroup: (n) => `创建群组（${n}）`, cancel: '取消', noOne: '现在没有其他人在线。', incoming: (n) => `${n} 来电`, accept: '接听', decline: '拒绝', hangUp: '挂断', calling: '呼叫中…', inCall: '通话中', needName: '输入名字即可聊天和通话。', empty: '选择一个人开始聊天。' },
  ja: { title: '友だち', online: 'オンライン', chats: 'チャット', namePrompt: '名前は？', namePh: 'あなたの名前', enter: '入る', you: 'あなた', self: '（あなた）', typeMsg: 'メッセージを入力…', send: '送信', callAudio: '通話', callVideo: 'ビデオ', group: '+ グループ', createGroup: (n) => `グループ作成（${n}）`, cancel: 'キャンセル', noOne: '今はほかに誰もいません。', incoming: (n) => `${n} から着信`, accept: '応答', decline: '拒否', hangUp: '切る', calling: '発信中…', inCall: '通話中', needName: '名前を入れてチャット・通話しよう。', empty: '相手を選んでチャット。' },
  ar: { title: 'الأشخاص', online: 'متصل', chats: 'المحادثات', namePrompt: 'ما اسمك؟', namePh: 'اسمك', enter: 'دخول', you: 'أنت', self: '(أنت)', typeMsg: 'اكتب رسالة…', send: 'إرسال', callAudio: 'اتصال', callVideo: 'فيديو', group: '+ مجموعة', createGroup: (n) => `أنشئ مجموعة (${n})`, cancel: 'إلغاء', noOne: 'لا أحد آخر متصل الآن.', incoming: (n) => `${n} يتصل بك`, accept: 'قبول', decline: 'رفض', hangUp: 'إنهاء', calling: 'يتصل…', inCall: 'في مكالمة', needName: 'اكتب اسمك للدردشة والاتصال.', empty: 'اختر شخصًا للدردشة.' }
};

type Props = {
  open: boolean;
  onClose: () => void;
  onCount: (n: number, connected: boolean) => void;
  name: string;
  lang: Lang;
};

export function Social({ open, onClose, onCount, name, lang }: Props) {
  const t = S[lang];
  const [roster, setRoster] = useState<Peer[]>([]);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [convParts, setConvParts] = useState<Record<string, string[]>>({});
  const [active, setActive] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const [groupMode, setGroupMode] = useState(false);
  const [groupSel, setGroupSel] = useState<Set<string>>(new Set());
  const [call, setCall] = useState<Call | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  const netRef = useRef<Net | null>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const pendingRef = useRef<{ from: string; name: string; sdp?: RTCSessionDescriptionInit; video: boolean } | null>(null);
  const callRef = useRef<Call | null>(null);
  callRef.current = call;
  const onCountRef = useRef(onCount);
  onCountRef.current = onCount;
  const msgEndRef = useRef<HTMLDivElement | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  // ——— WebRTC helpers ———
  const newPc = (peerId: string): RTCPeerConnection => {
    const pc = new RTCPeerConnection(ICE);
    pc.onicecandidate = (e) => {
      if (e.candidate) netRef.current?.signal(peerId, { t: 'ice', candidate: e.candidate.toJSON() });
    };
    pc.ontrack = (e) => setRemoteStream(e.streams[0] ?? null);
    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'connected') setCall((c) => (c ? { ...c, state: 'in' } : c));
      if (pc.connectionState === 'failed' || pc.connectionState === 'closed') endCall(false);
    };
    pcRef.current = pc;
    return pc;
  };

  const startCall = async (peer: Peer, video: boolean) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video });
      setLocalStream(stream);
      const pc = newPc(peer.id);
      stream.getTracks().forEach((tr) => pc.addTrack(tr, stream));
      setCall({ peerId: peer.id, name: peer.name || '???', video, state: 'calling' });
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      netRef.current?.signal(peer.id, { t: 'offer', sdp: offer, video });
    } catch {
      endCall(false);
    }
  };

  const acceptCall = async () => {
    const p = pendingRef.current;
    const net = netRef.current;
    if (!p || !net) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: p.video });
      setLocalStream(stream);
      const pc = newPc(p.from);
      stream.getTracks().forEach((tr) => pc.addTrack(tr, stream));
      if (p.sdp) await pc.setRemoteDescription(p.sdp);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      net.signal(p.from, { t: 'answer', sdp: answer });
      setCall({ peerId: p.from, name: p.name, video: p.video, state: 'in' });
      pendingRef.current = null;
    } catch {
      endCall(true);
    }
  };

  const endCall = (sendBye: boolean) => {
    const c = callRef.current;
    if (sendBye && c) netRef.current?.signal(c.peerId, { t: 'bye' });
    try {
      pcRef.current?.close();
    } catch {
      /* ignore */
    }
    pcRef.current = null;
    setLocalStream((s) => {
      s?.getTracks().forEach((tr) => tr.stop());
      return null;
    });
    setRemoteStream(null);
    pendingRef.current = null;
    setCall(null);
  };

  const handleSignal = (s: Signal) => {
    const sig = s.sig;
    if (sig.t === 'offer') {
      if (callRef.current) {
        netRef.current?.signal(s.from, { t: 'bye' });
        return; // already busy
      }
      pendingRef.current = { from: s.from, name: s.fromName || '???', sdp: sig.sdp, video: !!sig.video };
      setCall({ peerId: s.from, name: s.fromName || '???', video: !!sig.video, state: 'ringing' });
    } else if (sig.t === 'answer') {
      if (sig.sdp) pcRef.current?.setRemoteDescription(sig.sdp).catch(() => {});
    } else if (sig.t === 'ice') {
      if (sig.candidate) pcRef.current?.addIceCandidate(sig.candidate).catch(() => {});
    } else if (sig.t === 'bye') {
      endCall(false);
    }
  };

  const sigRef = useRef(handleSignal);
  sigRef.current = handleSignal;

  // ——— Net lifecycle (once) ———
  useEffect(() => {
    const net = new Net(name, 'arcade');
    netRef.current = net;
    net.on({
      onCount: (n, c) => onCountRef.current(n, c),
      onRoster: (peers) => setRoster(peers),
      onMessage: (m) => {
        setMessages((prev) => (prev.some((x) => x.mid === m.mid) ? prev : [...prev, m]));
        setConvParts((prev) => (prev[m.conv] ? prev : { ...prev, [m.conv]: m.parts }));
      },
      onSignal: (s) => sigRef.current(s)
    });
    net.start();
    return () => {
      endCall(false);
      net.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Attach media streams to the <video> elements.
  useEffect(() => {
    if (localVideoRef.current) localVideoRef.current.srcObject = localStream;
  }, [localStream, call]);
  useEffect(() => {
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStream;
  }, [remoteStream, call]);

  // Auto-scroll chat.
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, active]);

  // Keep the presence name in sync with the arcade-wide name (set at the gate).
  useEffect(() => {
    netRef.current?.setName(name);
  }, [name]);

  const others = roster.filter((p) => p.id !== netRef.current?.id);
  const myId = netRef.current?.id ?? '';

  const openDm = (peerId: string) => {
    const parts = [myId, peerId];
    const id = convId(parts);
    setConvParts((prev) => ({ ...prev, [id]: parts }));
    setActive(id);
    setGroupMode(false);
  };

  const toggleGroup = (peerId: string) => {
    setGroupSel((prev) => {
      const next = new Set(prev);
      if (next.has(peerId)) next.delete(peerId);
      else next.add(peerId);
      return next;
    });
  };

  const createGroup = () => {
    const parts = [myId, ...groupSel];
    if (parts.length < 3) return;
    const id = convId(parts);
    setConvParts((prev) => ({ ...prev, [id]: parts }));
    setActive(id);
    setGroupMode(false);
    setGroupSel(new Set());
  };

  const nameOf = (id: string): string => {
    if (id === myId) return t.you;
    return netRef.current?.nameOf(id) || roster.find((p) => p.id === id)?.name || '???';
  };

  const convLabel = (id: string): string => {
    const parts = convParts[id] ?? id.split('|');
    const otherIds = parts.filter((p) => p !== myId);
    return otherIds.map((p) => nameOf(p)).join(', ') || '???';
  };

  const sendMsg = () => {
    const text = draft.trim();
    if (!text || !active) return;
    const parts = convParts[active] ?? active.split('|');
    netRef.current?.send(parts, text);
    setDraft('');
  };

  const activeMsgs = active ? messages.filter((m) => m.conv === active) : [];
  const activeParts = active ? convParts[active] ?? active.split('|') : [];
  const isDm = activeParts.length === 2;
  const dmPeer = isDm ? others.find((p) => p.id === activeParts.find((x) => x !== myId)) : undefined;
  const convList = Object.keys(convParts);

  if (!open) return null;

  return (
    <div className="social-overlay" onClick={onClose}>
      <div className="social" onClick={(e) => e.stopPropagation()}>
        <header className="social-head">
          <h2>👥 {t.title}</h2>
          <button className="social-x" onClick={onClose} aria-label="close">✕</button>
        </header>

        <div className="social-body">
            <aside className="roster">
              <div className="roster-head">
                <span>{t.online} · {roster.length}</span>
                <button
                  className={`mini ${groupMode ? 'on' : ''}`}
                  onClick={() => {
                    setGroupMode((g) => !g);
                    setGroupSel(new Set());
                  }}
                >
                  {groupMode ? t.cancel : t.group}
                </button>
              </div>
              <div className="me-row">🟢 {name} <span className="self">{t.self}</span></div>
              <div className="people">
                {others.length === 0 && <p className="muted small">{t.noOne}</p>}
                {others.map((p) => (
                  <button
                    key={p.id}
                    className={`person ${active && convParts[active]?.includes(p.id) && isDm ? 'sel' : ''}`}
                    onClick={() => (groupMode ? toggleGroup(p.id) : openDm(p.id))}
                  >
                    {groupMode && <span className="chk">{groupSel.has(p.id) ? '☑' : '☐'}</span>}
                    <span className="dot" />
                    <span className="pname">{p.name || '???'}</span>
                  </button>
                ))}
              </div>
              {groupMode && (
                <button className="btn-primary full" onClick={createGroup} disabled={groupSel.size < 2}>
                  {t.createGroup(groupSel.size)}
                </button>
              )}
              {convList.length > 0 && (
                <div className="chats">
                  <span className="chats-h">{t.chats}</span>
                  {convList.map((id) => (
                    <button key={id} className={`chatrow ${active === id ? 'sel' : ''}`} onClick={() => setActive(id)}>
                      {convParts[id] && convParts[id].length > 2 ? '👥 ' : '💬 '}
                      {convLabel(id)}
                    </button>
                  ))}
                </div>
              )}
            </aside>

            <section className="thread">
              {!active ? (
                <div className="empty">{t.empty}</div>
              ) : (
                <>
                  <div className="thread-head">
                    <span className="thread-title">{convLabel(active)}</span>
                    {isDm && dmPeer && (
                      <span className="call-btns">
                        <button className="cbtn" title={t.callAudio} onClick={() => startCall(dmPeer, false)}>📞</button>
                        <button className="cbtn" title={t.callVideo} onClick={() => startCall(dmPeer, true)}>📹</button>
                      </span>
                    )}
                  </div>
                  <div className="msgs">
                    {activeMsgs.map((m) => (
                      <div key={m.mid} className={`msg ${m.from === myId ? 'mine' : ''}`}>
                        {m.from !== myId && activeParts.length > 2 && <span className="msg-from">{m.fromName || '???'}</span>}
                        <span className="bubble">{m.text}</span>
                      </div>
                    ))}
                    <div ref={msgEndRef} />
                  </div>
                  <div className="composer">
                    <input
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
                      placeholder={t.typeMsg}
                      maxLength={500}
                    />
                    <button className="btn-primary" onClick={sendMsg} disabled={!draft.trim()}>
                      {t.send}
                    </button>
                  </div>
                </>
              )}
            </section>
          </div>

        {call && (
          <div className="call-layer">
            <div className="call-card">
              <div className="call-videos">
                <video ref={remoteVideoRef} className="remote" autoPlay playsInline />
                {call.video && <video ref={localVideoRef} className="local" autoPlay playsInline muted />}
                {(!call.video || call.state !== 'in') && (
                  <div className="call-avatar">{(call.name || '?').charAt(0).toUpperCase()}</div>
                )}
              </div>
              <div className="call-info">
                <strong>{call.name}</strong>
                <span>
                  {call.state === 'ringing' ? t.incoming(call.name) : call.state === 'calling' ? t.calling : t.inCall}
                </span>
              </div>
              <div className="call-actions">
                {call.state === 'ringing' ? (
                  <>
                    <button className="call-accept" onClick={acceptCall}>{t.accept}</button>
                    <button className="call-end" onClick={() => endCall(true)}>{t.decline}</button>
                  </>
                ) : (
                  <button className="call-end" onClick={() => endCall(true)}>{t.hangUp}</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
