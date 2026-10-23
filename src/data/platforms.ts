import {
  Globe,
  ShoppingBag,
  Flame,
  Stack,
  ShoppingCart,
  PuzzlePiece,
  Code,
} from "@phosphor-icons/react/dist/ssr";
import type { PlatformItem } from "@/types";

export const platforms: PlatformItem[] = [
  { name: "WordPress", slug: "wordpress", icon: Globe },
  { name: "WooCommerce", slug: "woocommerce", icon: ShoppingBag },
  { name: "Laravel", slug: "laravel", icon: Flame },
  { name: "Magento", slug: "magento", icon: Stack },
  { name: "OpenCart", slug: "opencart", icon: ShoppingCart },
  { name: "Joomla", slug: "joomla", icon: PuzzlePiece },
  { name: "Custom PHP Apps", slug: "custom-php", icon: Code },
];
