import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Container, Input, Typography } from "@mui/material";
import { colors } from "../themes/colors";

const PostList: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5a6bc16631000078341b8b77")
      .then((response) => {
        setData(response.data.links);
        console.log(response.data.links);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
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
    sx={{ backgroundColor: colors.secondary, borderRadius: 1 
    }}
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
            marginBottom: "5px",
            minWidth: 900,
            mt: "5px",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {item.meta.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Author: {item.meta.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Comments: {item.comments}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upvotes: {item.upvotes}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default PostList;
