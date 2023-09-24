import React, { useState } from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Card, CardMedia, Typography, Grid, Box, CardContent, Button } from "@mui/material";

export const Portfolio = () => {
  return (
    <section id="Projects" className="section">
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Grid container spacing={4} className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <FlipCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

const FlipCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box
      sx={{
        perspective: "1000px",
        width: "100%",
        minHeight: "350px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "350px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
          cursor: "pointer",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Box
          component={Card}
          sx={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            minHeight: "350px",
            display: isFlipped ? "none" : "block",
          }}
        >
          <CardMedia component="img" height="300" image={data.img} alt={data.description} />
          <Typography variant="h6" align="center" color="text.primary">
            {data.Pname}
          </Typography>
        </Box>
        <Box
          component={CardContent}
          sx={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            minHeight: "350px",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.skills}
          </Typography>
          <Button size="small" color="primary" href={data.link} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
