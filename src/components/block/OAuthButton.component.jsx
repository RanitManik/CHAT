import { Button } from "@/components/ui/button.jsx";
import { assets } from "@/assets/assets.js";

const providerAssets = {
  google: assets.google,
  microsoft: assets.microsoft,
  github: assets.github,
  facebook: assets.facebook,
};

export const OAuthButtonComponent = ({ provider, onClick, onError }) => {
  const ProviderIcon = providerAssets[provider];

  const onClickHandler = async () => {
    try {
      await onClick();
      console.log("Successfully Signed in...");
    } catch (error) {
      console.error(error);
      onError(error);
    }
  };

  return (
    <Button
      title={`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
      aria-label={`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
      onClick={onClickHandler}
      variant="secondary"
    >
      <ProviderIcon className="h-full" />
    </Button>
  );
};
