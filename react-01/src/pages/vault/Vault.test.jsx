import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Vault from "./Vault";

jest.mock("../../components/collective/Collective", () => () => <section>The Collective submissions</section>);
const collections = [{ id: "saints", title: "SAINTS COLLECTION", cards: [
  { id: "tyler", title: "Tyler Shough", collection: "Saints Collection", src: "/images/tylershough.jpg", sport: "Football", company: "Panini", set: "Phoenix", details: "Autograph", serialization: "/199", preview: "/saints-preview" },
  { id: "simple", title: "Simple card", sport: "Football", details: "Rookie", src: "/images/card.jpg" }
] }];
beforeEach(() => {
  global.fetch = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});
afterEach(() => { delete global.fetch; });
function renderVault() {
  return render(<MemoryRouter initialEntries={["/vault#saints"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Vault /></MemoryRouter>);
}
test("loads backend collections, preserves metadata, links and submissions, and scrolls to the collection", async () => {
  fetch.mockResolvedValue({ ok: true, json: async () => collections });
  renderVault();
  await screen.findByText("Tyler Shough");
  expect(fetch).toHaveBeenCalledWith("http://localhost:3002/api/collections", expect.objectContaining({ signal: expect.anything() }));
  expect(screen.getByText(/Panini · Phoenix/)).toBeInTheDocument();
  expect(screen.getByText(/Numbered \/199/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View card/ })).toHaveAttribute("href", "/saints-preview");
  expect(screen.getByText("The Collective submissions")).toBeInTheDocument();
  expect(screen.getByAltText("Simple card — Rookie").closest("article")).not.toHaveTextContent("·");
  await waitFor(() => expect(Element.prototype.scrollIntoView).toHaveBeenCalled());
});
test("a failed collections request can be retried", async () => {
  fetch.mockRejectedValueOnce(new Error("Offline")).mockResolvedValueOnce({ ok: true, json: async () => collections });
  renderVault();
  await screen.findByRole("alert");
  fireEvent.click(screen.getByRole("button", { name: "Try again" }));
  await screen.findByText("Tyler Shough");
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});
