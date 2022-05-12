import React from "react";

export default function ErrorDisplay({ error }) {
  return (
    <div class='alert alert-warning' role='alert'>
      {error}
    </div>
  );
}
