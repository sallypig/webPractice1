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
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import useProducts from "./useProducts";
import { Product } from '../_settings/interfaces';

export default function ProductList() {
    // let products = [
    //     { desc: "iPad", price: 20000 },
    //     { desc: "iPhone 8", price: 20000 },
    //     { desc: "iPhone X", price: 30000 }
    // ];
    // const [products, setProducts] = useState([
    //     { desc: "iPad", price: 20000 },
    //     { desc: "iPhone 8", price: 20000 },
    //     { desc: "iPhone X", price: 30000 }
    // ])
    const [products, addProduct, deleteProduct, updateProduct, isLoading] = useProducts();
    const [newProduct, setNewProduct] = useState<Product>({ id: "", desc: "", price: 0, category: ""});
    const [status, setStatus] = useState({ visible: false });
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [updated, setUpdated] = useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    // const [newProduct, setNewProduct] = useState({ visible: false, desc: "", price: 0 })
    const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
        if (e.target.name === "price") {
            setNewProduct({ ...newProduct, [e.target.name]: parseInt(e.target.value) })
        }
        else {
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
        }
    }
    const show = () => {
        // setNewProduct({ ...newProduct, visible: true })
        setStatus({ ...status, visible: true })
    }
    const hide = () => {
        // setNewProduct({ ...newProduct, visible: false })
        setStatus({ ...status, visible: false })
        resetProduct();
    }
    // function update() {
    //     // setProducts(() => [...products, newProduct]);
    //     setNewProduct({ ...newProduct, visible: false })
    //     console.log(products);
    // }
    // const del = (
    //     event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    //     index: number,
    // ) => {
    //     products.splice(index, 1);
    //     // setProducts([...products]);
    //     console.log(products);
    // };
    // const ed = (
    //     event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    //     index: number,
    // ) => {
    //     products.splice(index, 1);
    //     // setProducts([...products]);
    //     setNewProduct({ ...newProduct, visible: true })
    // };

    // const e = (
    //     event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    //     index: number,
    // ) => {

    // };

    // function add() {
    //     addProduct(newProduct);
    //     setNewProduct({ ...newProduct, visible: false })
    //     console.log(products);
    // }
    const resetProduct = () => {
        setNewProduct({ id: "", desc: "", price: 0,category: "" })
    }
    function addOrUpdate() {
        if (newProduct.id === "") {
            addProduct(newProduct);
        }
        else {
            updateProduct(newProduct);
        }
        setStatus({ ...status, visible: false })
        resetProduct();
    }
    function setUpdateProduct(product: Product) {
        setNewProduct({ ...product })
        setStatus({ visible: true })
    }
    
    //   const handleClick2 = function (e: React.ChangeEvent<HTMLInputElement>) {
    //     if (e.target.name === "price") {
    //       setNewProduct({ ...newProduct, [e.target.name]: parseInt(e.target.value) })
    //     }
    //     else {
    //       setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    //     }
    //   }
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
            <Dialog open={status.visible} onClose={hide} aria-labelledby={newProduct.id === "" ? "新增產品" : "更新產品"}>
                <DialogTitle>{newProduct.id === "" ? "新增產品" : "更新產品"}</DialogTitle>
                <DialogContent>
                    <TextField label="產品描述" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><p /><br></br>
                    <TextField type="number" label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><p /><br></br>
                    <TextField type="string" label="產品類別" variant="outlined" name="category" value={newProduct.category} onChange={handleClick} /><p />
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
                    <Button variant="contained" color="primary" onClick={addOrUpdate}>{newProduct.id === "" ? "新增產品" : "更新產品"}</Button>
                </DialogActions>
            </Dialog>

            <div>
                {/* <button onClick={show}>新增產品</button> */}
                {isLoading ? <CircularProgress /> :
                    <List subheader="Product list" aria-label="product list">
                        {products.map((product, i) =>

                            <ListItem divider key={product.desc}>
                                <ListItemButton
                                    selected={selectedIndex === i}
                                    onClick={(event) => handleListItemClick(event, i)}
                                >
                                    <ListItemText primary={product.desc} secondary={[product.category,' ',product.price]}>
                                    </ListItemText>
                                    {/* <IconButton edge="end" aria-label="edit" onClick={(event) => ed(event, i)}>
                                        <EditIcon />
                                    </IconButton> */}
                                    <IconButton edge="end" aria-label="update" onClick={() => setUpdateProduct(product)}>
                                        <EditIcon />
                                    </IconButton>
                                    {/* <IconButton edge="end" aria-label="delete" onClick={(event) => del(event, i)}>
                                        <DeleteIcon />
                                    </IconButton> */}
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemButton>
                            </ListItem>

                        )}
                    </List>
                }
            </div>

        </Box>
    );

}