import * as React from "react";

export default function FileUpload() {
  function onChange(e: any) {
    console.log(e.target.files[0]);
  }
  return (
    <>
      <input onChange={onChange} type="file" />
      <button>Enviar</button>
    </>
  );
}
