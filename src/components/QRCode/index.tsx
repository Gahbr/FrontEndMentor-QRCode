type Props = {
  src: string;
};
export default function QRCode({ src }: Props) {
  return <img src={src} alt="qr-code" className="qrcode" />;
}
