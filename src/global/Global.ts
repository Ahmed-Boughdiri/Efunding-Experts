import {
  faHome,
  faUsers,
  faUser,
  faFileAlt,
  faPencilAlt,
  faPlay,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface PathProps {
  name: String;
  link: String;
}

interface PagesProps {
  name: String;
  path: PathProps[];
}

export interface TabProps {
  name: String;
  icon: IconDefinition;
  placeholder: String;
  link: String;
}

interface StateProps {
  pages: PagesProps[];
  tabs: TabProps[];
}

export const state: StateProps = {
  pages: [
    {
      name: "Quotes",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
        {
          name: "Quotes",
          link: "/quotes",
        },
      ],
    },
    {
      name: "Clients",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
        {
          name: "Clients",
          link: "/clients",
        },
      ],
    },
    {
      name: "Contracts",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
        {
          name: "Contrcats",
          link: "/contracts",
        },
      ],
    },
    {
      name: "Dashboard",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
      ],
    },
    {
      name: "Training",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
        {
          name: "Training",
          link: "/training",
        },
      ],
    },
    {
      name: "Refferal",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
        {
          name: "Refferal",
          link: "/refferal",
        },
      ],
    },
    {
      name: "Edit",
      path: [
        {
          name: "Home",
          link: "/dashboard",
        },
        {
          name: "Edit",
          link: "/edit",
        },
      ],
    },
  ],
  tabs: [
    {
      name: "Dashboard",
      icon: faHome,
      placeholder: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Quotes",
      icon: faUsers,
      placeholder: "Quotes (Pre-Contract)",
      link: "/quotes",
    },
    {
      name: "Clients",
      icon: faUser,
      placeholder: "Clients (Contract in)",
      link: "/clients",
    },
    {
      name: "Refferal",
      icon: faFileAlt,
      placeholder: "Submit New Refferal",
      link: "/refferal",
    },
    {
      name: "Training",
      icon: faPlay,
      placeholder: "Training and Resources",
      link: "/training",
    },
    {
      name: "Contracts",
      icon: faPencilAlt,
      placeholder: "Contracts, Apps, and Forms",
      link: "/contracts",
    },
  ],
};
