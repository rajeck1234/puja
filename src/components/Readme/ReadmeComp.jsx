import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./profilePic2.1.png";
import Footer from "./Footer";

const ProfileComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenProfile, setHasSeenProfile] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenProfile");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleOpen = () => {
    setHasSeenProfile(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenProfile(true);
    localStorage.setItem("hasSeenProfile", "true");
  };

  return (
    <>
      {!hasSeenProfile && (
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          open={open}
          PaperProps={{
            sx: {
              borderRadius: "1rem",
              maxHeight: "70vh",
            },
          }}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center h-16">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline text-base md:text-lg">
                  Quickcart
                </span>
              </Typography>

              <IconButton>
                <Avatar
                  alt="Puja Kumari"
                  src={profilePic}
                  sx={{
                    width: isMobile ? "60px" : "70px",
                    height: "auto",
                    border: "2px solid #3B82F6",
                  }}
                />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.25rem" }}
              >
            ⚡     I'm Puja Kumari,Completed internship in Full Stack Web-development at YHILLS .I completed my B.E from MVJ COLLEGE OF ENGINEERING with CGPA of 8.2
            Phone:[+916204457279]
            Email:pujasah21ago@gmail.com
                   </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                   </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.25rem" }}
              >
                📞 Phone: [+916204457279]
                <br />
                Email: pujasah21ago@gmail.com
              </Typography>
              <Divider />
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}

      <IconButton
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300"
        onClick={handleOpen}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <BsExclamation className="hover:bg-red-500 rounded-full w-6 h-auto md:w-8 md:h-8" />
      </IconButton>
    </>
  );
};

export default ProfileComponent;
