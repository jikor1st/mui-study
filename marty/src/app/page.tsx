import { Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <Button variant="contained">
        <Typography variant="h5">Hello World</Typography>
      </Button>
      <Divider orientation="vertical">
        <Typography variant="h5">Hello World</Typography>
      </Divider>
    </div>
  );
}
