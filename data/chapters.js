import introduction from "../data/introduction";
import cleanCode from "../data/cleanCode";
import meaningfulNames from "../data/meaningfulNames";
import functions from "../data/functions";
import comments from "../data/comments";
import formatting from "../data/formatting";

const chapters = [
    {
        name: "مقدمه",
        slug: "مقدمه",
        content: introduction,
        prev: null,
        next: {
            name: "کد تمیز",
            slug: "کد-تمیز",
        },
    },
    {
        name: "کد تمیز",
        slug: "کد-تمیز",
        content: cleanCode,
        prev: {
            name: "مقدمه",
            slug: "مقدمه",
        },
        next: {
            name: "اسامی با معنی",
            slug: "اسامی-با-معنی",
        },
    },
    {
        name: "اسامی با معنی",
        slug: "اسامی-با-معنی",
        content: meaningfulNames,
        prev: {
            name: "کد تمیز",
            slug: "کد-تمیز",
        },
        next: {
            name: "توابع",
            slug: "توابع",
        },
    },
    {
        name: "توابع",
        slug: "توابع",
        content: functions,
        prev: {
            name: "اسامی با معنی",
            slug: "اسامی-با-معنی",
        },
        next: {
            name: "کامنت ها",
            slug: "کامنت-ها",
        },
    },
    {
        name: "کامنت ها",
        slug: "کامنت-ها",
        content: comments,
        prev: {
            name: "توابع",
            slug: "توابع",
        },
        next: {
            name: "قالب بندی",
            slug: "قالب-بندی",
        },
    },
    {
        name: "قالب بندی",
        slug: "قالب-بندی",
        content: formatting,
        prev: {
            name: "کامنت ها",
            slug: "کامنت-ها",
        },
        next: null,
    },
];
export default chapters;
