import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { DialogProps } from "../../types/app.type";
import { StyledWrapper } from "./styled";

export const DialogBox: React.FC<DialogProps> = ({ onClose, isOpen, content }) => {
    return (
        <StyledWrapper onClose={onClose} open={isOpen}>
            <List
                sx={{
                    paddingTop: 0
                }}
            >
                {content.map((content, index) => (
                    <ListItem
                        disableGutters
                        key={index}
                    >
                        <ListItemButton onClick={onClose}>
                            <ListItemAvatar>
                                <Avatar>
                                    {content.icon}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={content.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </StyledWrapper>
    );
}
