import type {
  SidebarsConfig,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: "doc",
      id: "index",
      customProps: { sidebarHeader: "Docs" },
    },
    {
      type: "html",
      value: "SDKs",
      className: "category-label",
    },
    {
      type: "link",
      label: "Web5 SDK",
      href: "web5-sdk",
      className: "web5-icon",
    },
    {
      type: "link",
      label: "tbDEX SDK",
      href: "tbdex-sdk",
      className: "tbdex-icon",
    },
    { type: "html", value: "RESOURCES", className: "category-label" },
    {
      type: "link",
      label: "API Reference Guides",
      href: "/",
      className: "external-link-icon no-caret",
    },
    {
      type: "link",
      label: "Glossary",
      href: "/",
      className: "glossary-icon no-caret",
    },
  ],
  web5Sidebar: [
    // {
    //   type: "doc",
    //   id: "web5-sdk/index",
    //   customProps: { sidebarHeader: "Web5 SDK" },
    // },
    {
      type: "doc",
      id: "web5-sdk/index",
      label: "Getting Started",
      customProps: { sidebarHeader: "Web5 SDK" },
    },
    {
      type: "html",
      value: "components",
      className: "category-label",
    },
    {
      type: "autogenerated",
      dirName: "web5-sdk",
      customProps: { sidebarHeader: "test" },
    },
  ],
  tbdexSidebar: [
    {
      id: "tbdex-sdk/index",
      type: "doc",
      label: "Getting Started",
      customProps: { sidebarHeader: "tbdex SDK" },
    },
    {
      type: "html",
      value: "components",
      className: "category-label",
    },
    { type: "autogenerated", dirName: "tbdex-sdk" },
  ],
};

export default sidebars;
