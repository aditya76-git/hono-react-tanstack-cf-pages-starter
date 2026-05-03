import { RouterClient } from "@tanstack/react-router/ssr/client";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { createAppRouter } from "./router";
import "./index.css";

const router = createAppRouter();

hydrateRoot(
    document,
    <StrictMode>
        <RouterClient router={router} />
    </StrictMode>,
);
