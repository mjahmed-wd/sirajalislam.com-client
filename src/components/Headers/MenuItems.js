import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useLanguage } from "../LanguageProvider/LanguageProvider";

const MenuItems = ({ sections, handleDrawerClose, language }) => {
  const { setLanguage } = useLanguage();
  return (
    <>
      {" "}
      <List>
        {sections.map((text, index) => (
          <a
            href={`#${text.id}`}
            key={text.title}
            onClick={() => {
              handleDrawerClose();
              setLanguage(language);
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            {/* <ThemeProvider theme={boldTheme}> */}
            <ListItem button>
              {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
              <ListItemText primary={text.title} />
            </ListItem>
            {/* </ThemeProvider> */}
          </a>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default MenuItems;
