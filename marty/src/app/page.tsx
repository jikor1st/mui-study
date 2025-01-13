import Header from "@/components/Header";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageSwiper from "@/components/ImageSwiper";

export default async function Home() {
  const imageList = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return (
    <Box
      sx={{
        width: "480px",
        height: "100vh",
        backgroundColor: "white",
        margin: "0 auto",
      }}
    >
      <Header />
      <TextField
        placeholder="도시나 상품을 검색해보세요."
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <ImageSwiper time={3000} imageList={imageList} />
    </Box>
  );
}
