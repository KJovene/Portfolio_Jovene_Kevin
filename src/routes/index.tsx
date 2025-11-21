import { createFileRoute } from "@tanstack/react-router";
import { PortfolioLayout } from "../pages/Portfolio";

export const Route = createFileRoute("/")({
  component: PortfolioLayout,
});
