import { routes } from "src/routes";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ShoppingCartIcon } from "src/assets/icons";
import { SimpleIconButton } from "src/shared-components/form/fields/buttons/simple-icon-button";

export default function ProductScreenHeader() {
  const navigate = useNavigate();

  const navigatoToHome = () => {
    navigate(routes.home);
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4">
      {/* back arrow */}
      <SimpleIconButton
        id="product-header-back"
        onClick={navigatoToHome}
        disabled={false}
        icon={<ArrowLeftIcon className="stroke-foreground w-6 h-6" />}
      />
      {/* shopping cart */}
      <SimpleIconButton
        id="product-header-back"
        onClick={() => {}}
        disabled={false}
        icon={<ShoppingCartIcon className="stroke-foreground w-6 h-6" />}
      />
    </header>
  );
}
