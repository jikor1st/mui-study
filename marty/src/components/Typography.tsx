import MuiTypography, { type TypographyProps } from "@mui/material/Typography";

const Typography = ({
  children,
  variant,
  ...rest
}: {
  children: string | JSX.Element;
  variant: TypographyProps["variant"];
} & TypographyProps) => {
  return (
    <MuiTypography variant={variant} {...rest}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
