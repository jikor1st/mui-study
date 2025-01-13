import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import Typography from "./Typography";

const Header = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <MenuIcon />
      <Typography variant="h5">로고</Typography>
      <SearchIcon />
    </Stack>
  );
};

export default Header;
