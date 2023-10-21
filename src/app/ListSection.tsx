"use client";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  Input,
  VStack,
  Box,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const LIST_DATA_LS_KEY = "LIST_DATA_LS_KEY";

export const ListSection = () => {
  const initialData = localStorage.getItem(LIST_DATA_LS_KEY);
  const [textInputValue, setTextInputValue] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>(
    initialData ? JSON.parse(initialData) : []
  );

  const addToList = (listValue: string) => {
    localStorage.setItem(
      LIST_DATA_LS_KEY,
      JSON.stringify([
        ...new Set([listValue.toLocaleUpperCase(), ...shoppingList]),
      ])
    );
    const localData = localStorage.getItem(LIST_DATA_LS_KEY);
    setShoppingList(localData ? JSON.parse(localData) : []);
  };

  const valueIsStored = (value: string): boolean => {
    const storedData = localStorage.getItem(LIST_DATA_LS_KEY);
    if (storedData === null) return false;
    const parsedData = JSON.parse(storedData) as string[];
    return !!parsedData.find(
      (i) => i.toLocaleUpperCase() === value.toLocaleUpperCase()
    );
  };

  const handleSubmit = () => {
    addToList(textInputValue);
    setTextInputValue("");
  };

  const handleRemoveButton = (item: string) => {
    localStorage.setItem(
      LIST_DATA_LS_KEY,
      JSON.stringify([
        ...shoppingList.filter(
          (li) => li.toLocaleUpperCase() !== item.toLocaleUpperCase()
        ),
      ])
    );
    const localData = localStorage.getItem(LIST_DATA_LS_KEY);
    setShoppingList(localData ? JSON.parse(localData) : []);
  };

  return (
    <VStack>
      <List>
        {shoppingList.map((l) => {
          return (
            <ListItem>
              <HStack>
                <Box>{l}</Box>
                <IconButton
                  variant={"ghost"}
                  icon={<AiOutlineCloseCircle />}
                  aria-label={"remove-button"}
                  onClick={() => handleRemoveButton(l)}
                />
              </HStack>
            </ListItem>
          );
        })}
      </List>

      <Input
        value={textInputValue}
        onInput={(e) => {
          setTextInputValue((e.target as HTMLInputElement).value);
        }}
      ></Input>
      <Button onClick={handleSubmit}>Legg til!</Button>
    </VStack>
  );
};
