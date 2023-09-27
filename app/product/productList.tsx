'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListItem from "@mui/material/ListItem";

export default function ProductList() {
    let products = [
        { desc: "iPad", price: 20000 },
        { desc: "iPhone 8", price: 20000 },
        { desc: "iPhone X", price: 30000 }
    ];
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        alert(index)
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List subheader="Product list" aria-label="product list">
                {products.map((product,i) =>
                    
                        <ListItem divider key={product.desc}>
                            <ListItemButton
                        selected={selectedIndex === i}
                        onClick={(event) => handleListItemClick(event, i)}
                    >
                            <ListItemText primary={product.desc} secondary={product.price}>
                            </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    
                    )}
            </List>
        </Box>
    );

}