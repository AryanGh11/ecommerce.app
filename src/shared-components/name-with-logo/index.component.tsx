import logo from "src/assets/images/logo192.png";
import Translation from "src/translations/locales/translation";

import { useTranslation } from "react-i18next";

export default function NameWithLogo() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="logo" className="w-5 h-5 object-cover rounded-md" />
      <h1 className="font-inter-bold text-lg">{t(Translation.audio)}</h1>
    </div>
  );
}
