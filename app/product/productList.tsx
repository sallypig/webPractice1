'use client';
import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
// import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";

export default function ProductList() {
    // let products = [
    //     { desc: "iPad", price: 20000 },
    //     { desc: "iPhone 8", price: 20000 },
    //     { desc: "iPhone X", price: 30000 }
    // ];
    const [products, setProducts] = useState([
        { desc: "iPad", price: 20000 },
        { desc: "iPhone 8", price: 20000 },
        { desc: "iPhone X", price: 30000 }
    ])
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 })
    const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }
    const show = () => {
        setNewProduct({ ...newProduct, visible: true })
    }
    const hide = () => {
        setNewProduct({ ...newProduct, visible: false })
    }
    function update() {
        setProducts(() => [...products, newProduct]);
        setNewProduct({ ...newProduct, visible: false })
        console.log(products);
    }
    const del = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: number,
    ) => {
        products.splice(index,1);
        setProducts([...products]);
        console.log(products);
    };
    const ed = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: number,
    ) => {
        products.splice(index,1);
        setProducts([...products]);
        setNewProduct({ ...newProduct, visible: true })
    };
    
    const e = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: number,
    ) => {
        
    };
    return (
        <Box sx={{
            width: '80vw',
            height: '100vh',
            backgroundColor: 'background.paper',
            color: 'black',
            textAlign: 'left'
        }}>
            <Fab color="primary" aria-label="Add" onClick={show}>
                <AddIcon />
            </Fab>
            <Dialog open={newProduct.visible} onClose={hide} aria-labelledby="新增產品">
                <DialogTitle>新增產品</DialogTitle>
                <DialogContent>
                    <TextField label="產品描述" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><p />
                    <TextField label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><p />
                </DialogContent>
                <DialogActions>
                    <IconButton
                        aria-label="close"
                        onClick={hide}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Button variant="contained" color="primary" onClick={update}>新增</Button>
                </DialogActions>
            </Dialog>
            
            <div>
                {/* <button onClick={show}>新增產品</button> */}
                <List subheader="Product list" aria-label="product list">
                    {products.map((product, i) =>

                        <ListItem divider key={product.desc}>
                            <ListItemButton
                                selected={selectedIndex === i}
                                onClick={(event) => handleListItemClick(event, i)}
                            >
                                <ListItemText primary={product.desc} secondary={product.price}>
                                </ListItemText>
                                <IconButton edge="end" aria-label="edit" onClick={(event) => ed(event, i)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={(event) => del(event, i)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemButton>
                        </ListItem>

                    )}
                </List>
            </div>

        </Box>
    );

}