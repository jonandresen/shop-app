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
import { PrettifyForList } from "./utils/textUtils";
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "./utils/localStorage";

const LIST_DATA_LS_KEY = "LIST_DATA_LS_KEY";

export const ListSection = () => {
  const initialData = getLocalStorageValue(LIST_DATA_LS_KEY);
  const [textInputValue, setTextInputValue] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>(
    initialData ? JSON.parse(initialData) : []
  );

  const addToList = (listValue: string) => {
    setLocalStorageValue(
      LIST_DATA_LS_KEY,
      JSON.stringify([
        ...new Set([listValue.toLocaleUpperCase(), ...shoppingList]),
      ])
    );
    const localData = getLocalStorageValue(LIST_DATA_LS_KEY);
    setShoppingList(localData ? JSON.parse(localData) : []);
  };

  const handleSubmit = () => {
    addToList(textInputValue);
    setTextInputValue("");
  };

  const handleRemoveButton = (item: string) => {
    setLocalStorageValue(
      LIST_DATA_LS_KEY,
      JSON.stringify([
        ...shoppingList.filter(
          (li) => li.toLocaleUpperCase() !== item.toLocaleUpperCase()
        ),
      ])
    );
    const localData = getLocalStorageValue(LIST_DATA_LS_KEY);
    setShoppingList(localData ? JSON.parse(localData) : []);
  };

  return (
    <VStack>
      <List width={"80%"}>
        {shoppingList.map((l) => {
          return (
            <ListItem
              margin={2}
              border={"1px solid black"}
              padding={2}
              borderRadius={8}
            >
              <HStack justifyContent={"space-between"}>
                <Box>{PrettifyForList(l)}</Box>
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
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      ></Input>
      <Button onClick={handleSubmit}>Legg til!</Button>
    </VStack>
  );
};
