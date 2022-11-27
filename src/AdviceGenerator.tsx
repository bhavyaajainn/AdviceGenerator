import { Casino, Pause, PauseRounded } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
export const AdviceGenerator = () => {
  type adviceType = {
    slip: {
      id: string;
      advice: string;
    };
  };

  const [click, setClick] = useState<Boolean>(false);
  const [adviceData, setAdviceData] = useState<adviceType>({} as adviceType);

  const onClick = () => {
    setClick(true);
  };
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((json) => setAdviceData(json));
    setClick(false);
  }, [click]);
  return (
    <div style={{backgroundColor: "#212121"}}>
      <Grid container spacing={3} sx={{backgroundColor: '#212121'}}>
        <Grid item xs={0} md={3.91}></Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            margin: { xs: "2em 1em 2em 1em", md: "10em 0.5em 10em 0.5em" },
          }}
        >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "1em",
                borderRadius: "0.5em",
                backgroundColor: "#616161",
                padding: "2em",
              }}
            >
              <Box
                sx={{
                  color: "#00e676",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Advice {`#${adviceData?.slip?.id}`}
              </Box>
              <Box sx={{color: "white", margin:"1em", fontSize:"20px", fontWeight:"600"}}>{adviceData?.slip?.advice}</Box>
              <Box sx={{ display: "flex", marginBottom:"1em" }}>
                <hr
                  style={{
                    width: "12em",
                    backgroundColor: "grey",
                    height: "2px",
                    border: "none",
                  }}
                ></hr>
                <span>
                  <PauseRounded sx={{ alignSelf: "center", color: "white" }} />
                </span>
                <hr
                  style={{
                    width: "12em",
                    backgroundColor: "grey",
                    height: "2px",
                    border: "none",
                  }}
                ></hr>
              </Box>
              <Casino sx={{alignSelf:"center", marginBottom:"-1.8em", padding:"0.3em", borderRadius:"0.8em", 
            backgroundColor:"#00e676", "&:hover" :{boxShadow:"1px 1px 35px 10px #00e676"}}} onClick={()=> onClick()} />
            </Box>
        </Grid>
        <Grid item xs={0} md={3.91}></Grid>
      </Grid>
    </div>
  );
};
