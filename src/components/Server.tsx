import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  Input,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Colors } from "../themes/Colors";
import OrangeTheme from "../themes/OrangeTheme";
import Bottom from "./Bottom";
import LoadMore from "./LoadMore";
import RandomAvatar from "../themes/RandomAvatar";
import { getFormattedCategory } from "./Formats";
import { CategoryColors } from "../themes/CategoryColors";

const PostList: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const formatCreatedAt = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5a6bc16631000078341b8b77")
      .then((response) => {
        setData(response.data.links);
        console.log(response.data.links);
      })
      .catch((error) => {
        console.error("Error getting API data:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.meta.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  return (
    <Container
      sx={{
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <Input
        sx={{ backgroundColor: Colors.secondary, borderRadius: 1 }}
        placeholder="&#128269;"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      ></Input>

      {filteredData.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: "80%",
            marginBottom: "2px",
            minWidth: 900,
            mt: "2px",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <ButtonGroup variant="contained">
              <Button
                sx={{ backgroundColor: Colors.primary, color: Colors.tertiary }}
              >
                {" "}
                {item.upvotes}
              </Button>
            </ButtonGroup>

            <ThemeProvider theme={OrangeTheme}>
              <Typography
                variant="body2"
                color="text.secondary"
                textTransform={"uppercase"}
                sx={{ mt: 0.4 }}
              >
                {item.meta.url}
              </Typography>
              <Typography variant="h5" component="div" sx={{ mb: 0.8 }}>
                {item.meta.title}
              </Typography>
              <Grid container direction="row" alignItems={"center"} spacing={2}>
                <Grid item xs={"auto"}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      backgroundColor: CategoryColors(item.category),
                      borderRadius: 2,
                      padding: "5px",
                    }}
                  >
                    {getFormattedCategory(item.category)}
                  </Typography>
                </Grid>
                <Grid item xs={"auto"}>
                  <RandomAvatar />
                </Grid>
                <Grid item xs={"auto"}>
                  <Typography color="text.secondary">
                    <Link>{item.meta.author}</Link>
                  </Typography>
                </Grid>
                <Grid item xs={"auto"}>
                  <Typography color="text.secondary">
                    {formatCreatedAt(item.created_at)} •
                  </Typography>
                </Grid>
                <Grid item xs={"auto"}>
                  <Typography variant="body2" color="text.secondary">
                    <Link>{item.comments} Comments</Link>
                  </Typography>
                </Grid>
                <Grid item xs={"auto"}>
                  <Typography variant="body2" color="text.secondary">
                    <Link>Edit </Link>
                  </Typography>
                </Grid>
              </Grid>
            </ThemeProvider>
          </CardContent>
        </Card>
      ))}
      <LoadMore></LoadMore>
      <Bottom></Bottom>
    </Container>
  );
};

export default PostList;
