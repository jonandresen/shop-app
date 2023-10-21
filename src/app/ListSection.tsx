'use client'

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const ListSection = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const handleSubmit = () => {
    setShoppingList([textInputValue, ...shoppingList]);
    setTextInputValue("");
  };

  return (
    <>
      <List>
        {shoppingList.map(l => {
            return (
            <ListItem>
                {l}
            </ListItem>
            )
        })}
      </List>

      <Input
        value={textInputValue}
        onInput={(e) => {
          setTextInputValue((e.target as HTMLInputElement).value);
        }}
      ></Input>
      <Button onClick={handleSubmit}>Legg til!</Button>
    </>
  );
};
