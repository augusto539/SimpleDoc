import React from 'react'
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

export default function Crear() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote();

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={"dark"} />;
}