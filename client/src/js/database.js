import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const postDb = async (content) => {
  console.error("postDb not implemented");
  const editorDb = await openDB("edits", 1);
  const tx = editorDb.transaction("edits", "readwrite");
  const store = tx.objectStore("edits");
  const request = store.add({ edit: content });
  const result = await request;
  console.log("data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");
  console.log("Return all from the database");
  const editorDb = await openDB("edits", 1);
  const tx = editorDb.transaction("edits", "readonly");
  const store = tx.objectStore("edits");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};
initdb();
