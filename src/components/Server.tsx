import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

const CardList: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

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

  return (
    <div>
      {data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: "10px" }}>
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
    </div>
  );
};

export default CardList;
