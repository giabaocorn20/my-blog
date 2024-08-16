import * as React from "react"
import { graphql } from "gatsby"

import PageTemplate from "./page-templates/pageTemplate"
import Alert from "@mui/material/Alert"
import data from "../data/data.json"
const notes = data.notes
const Notes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageTemplate
      location={location}
      pageTitle={"University Notes"}
      pageSeo={"Notes"}
      tabIndex={4}
    >
      <Alert
        severity="info"
        sx={{
          backgroundColor: "primary.light",
          color: "primary.dark",
          "& .MuiSvgIcon-root": { color: "primary.dark" },
        }}
        icon={"🧐"}
      >
        {notes.description}
      </Alert>

      <h2> Second Year </h2>
      {notes.second_year.map((note, index) => (
        <a key={index} href={note.link}>{note.title}</a>
      ))}
    </PageTemplate>
  )
}

export default Notes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

