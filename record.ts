// Record<Key Type, Value Type> - Usado para mapear propriedades de um tipo para outro tipo

type ButtonVariant = "primary" | "danger" | "disable";

type ButtonStyle = {
  backgroundColor: string;
  //   borderColor: string;
  isEnabled: boolean;
};

function getButtonStyle(variant: ButtonVariant): ButtonStyle {
  switch (variant) {
    case "primary":
      return { backgroundColor: "#8158F9", isEnabled: true };
    case "danger":
      return { backgroundColor: "#DC3545", isEnabled: true };
    case "disable":
      return { backgroundColor: "#CCC", isEnabled: false };
    default:
      return { backgroundColor: "#FFF", isEnabled: true };
  }
}

getButtonStyle("primary");

const buttonStyles: Record<ButtonVariant, ButtonStyle> = {
  primary: { backgroundColor: "#8158F9", isEnabled: true },
  danger: { backgroundColor: "#DC3545", isEnabled: true },
  disable: { backgroundColor: "#CCC", isEnabled: false },
};

function renderButton(title: string, variant: ButtonVariant) {
  const style = buttonStyles[variant];
}