import * as React from "react"
import { useCallback, useEffect } from "react"

import PinnedPosts from "./PinnedPosts"
import Socials from "./socials"
import SearchDialog from "./search/search-dialog"

import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"

import data from "../data/data.json"
const avatar = data.configs.websiteInfo.avatar
const  personal = data.profile
export default function PanelRight({ extraDrawerContent }) {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleKeyPress = useCallback(event => {
    // open dialog with command+k shortcut
    if (event.key === "k" && event.metaKey) {
      if (!open) {
        setOpen(true)
      }
    }
  }, [])

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <Box
      sx={{
        display: "block",
        minHeight: "100vh",
        borderLeft: "1px solid",
        borderColor: "divider",
        width: "394px",
        "@media (max-width: 1240px)": {
          width: "280px",
        },
        "@media (max-width: 1080px)": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "relative",
          display: "inline-block",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "0px",
            marginTop: "0px",
            display: "block",
          }}
        >
          <Box
            sx={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "packed",
              gap: "60px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                disableElevation
                fullWidth
                sx={{
                  backgroundColor: "text.postBody",
                  color: "background.alt",
                  borderColor: "divider",
                  borderRadius: "2rem",
                  textTransform: "none",
                  fontWeight: 400,
                }}
                // email to the author
                onClick={() => {
                  const email =  personal.email;
                  const subject = "Subject of the email";
                  const body = "Hey handsome guy, ";

                  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`;
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleClickOpen}
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  borderRadius: "2rem",
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontWeight: 400,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <SearchIcon fontSize="small" />
                  Search
                </Box>
                ⌘K
              </Button>
              <SearchDialog
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
              />
            </Box>
            {extraDrawerContent ? null : (
              <Box
                // user info
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <Avatar
                    alt={avatar.alt}
                    src="../avatar.jpg"
                    sx={{ width: 64, height: 64, backgroundColor: "divider" }}
                  >
                    {avatar.words}
                  </Avatar>
                  <div>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "16px !important",
                        letterSpacing: 0,
                        fontWeight: "500",
                        lineHeight: "20px",
                        color: "text.primary",
                      }}
                    >
                      {personal.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                      {personal.occupation}
                    </Typography>
                  </div>
                </Box>
                <Typography variant="body2" sx={{  color: "text.secondary" }}>
                  {personal.bio}
                </Typography>
              </Box>
            )}
            {extraDrawerContent ? null : <PinnedPosts />}
            {extraDrawerContent}
            <Socials />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
