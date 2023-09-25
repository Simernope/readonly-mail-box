import {MailType} from "./types";

export const mails: MailType[] = [
    {
        id: 1,
        title: "Hello",
        mailMessage: "Hi, how are you?",
        sendingTime: 1695563344399,
        sender: "John",
        recipient: "Simeon",
        folder: {id: 0, title: 'Входящие'},
        optionalFolders: [],
        isMarked: true
    },
    {
        id: 2,
        title: "Meeting",
        mailMessage: "We have a meeting tomorrow at 10am.",
        sendingTime: 1695563344399,
        sender: "Jane",
        recipient: "Simeon",
        folder: {id: 0, title: 'Входящие'},
        optionalFolders: [],
        isMarked: true
    },
    {
        id: 3,
        title: "Reminder",
        mailMessage: "Don't forget to submit your report by end of day.",
        sendingTime: 1695563344399,
        sender: "David",
        recipient: "Simeon",
        folder: {id: 0, title: 'Входящие'},
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 4,
        title: "Vacation",
        mailMessage: "I will be on vacation next week. I will not be available during my vacation",
        sendingTime: 1695563344399,
        sender: "Sarah",
        recipient: "Simeon",
        folder: {id: 1, title: 'Исходящие'},
        optionalFolders: [],
        isMarked: false,
        prevMail: {
            id: 5,
            title: "Out of office",
            mailMessage: "I will not be available during my vacation.",
            sendingTime: 1695563344399,
            sender: "Sarah",
            recipient: "Simeon",
            folder: {id: 0, title: 'Входящие'},
            optionalFolders: [],
            isMarked: false
        },
    },
    {
        id: 5,
        title: "Письмо 1",
        mailMessage: "Привет! Как дела?",
        sendingTime: 1695563344399,
        sender: "user1@example.com",
        recipient: "user2@example.com",
        folder: {
            id: 1,
            title: "Входящие",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 6,
        title: "Письмо 2",
        mailMessage: "Давно не виделись. Встретимся?",
        sendingTime: 1695563344399,
        sender: "user3@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 1,
            title: "Входящие",
        },
        optionalFolders: [],
        isMarked: true
    },
    {
        id: 7,
        title: "Письмо 3",
        mailMessage: "Основное письмо в папке Исходящие",
        sendingTime: 1695563344399,
        sender: "user1@example.com",
        recipient: "user4@example.com",
        folder: {
            id: 2,
            title: "Исходящие",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 8,
        title: "Письмо 4",
        mailMessage: "Письмо в папке Удаленные",
        sendingTime: 1695563344399,
        sender: "user2@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 3,
            title: "Удаленные",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 9,
        title: "Письмо 5",
        mailMessage: "Письмо в папке Помеченные",
        sendingTime: 1627190400,
        sender: "user3@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 4,
            title: "Помеченные",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 10,
        title: "Письмо 6",
        mailMessage: "Спам! Остерегайтесь",
        sendingTime: 1627190400,
        sender: "spam@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 5,
            title: "Спам",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 11,
        title: "Письмо 7",
        mailMessage: "Черновик письма",
        sendingTime: 1627190400,
        sender: "user1@example.com",
        recipient: "user5@example.com",
        folder: {
            id: 6,
            title: "Черновики",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 12,
        title: "Письмо 8",
        mailMessage: "Важное сообщение",
        sendingTime: 1627190400,
        sender: "user2@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 1,
            title: "Входящие",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 13,
        title: "Письмо 9",
        mailMessage: "Приглашение на встречу",
        sendingTime: 1627190400,
        sender: "user4@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 1,
            title: "Входящие",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 14,
        title: "Письмо 10",
        mailMessage: "Письмо в папке Исходящие",
        sendingTime: 1627190400,
        sender: "user1@example.com",
        recipient: "user3@example.com",
        folder: {
            id: 2,
            title: "Исходящие",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 15,
        title: "Письмо 11",
        mailMessage: "Задача для выполнения",
        sendingTime: 1627190400,
        sender: "user1@example.com",
        recipient: "user2@example.com",
        folder: {
            id: 6,
            title: "Черновики",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 17,
        title: "Письмо 12",
        mailMessage: "Приглашение на конференцию",
        sendingTime: 1627190400,
        sender: "user5@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 1,
            title: "Входящие",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 18,
        title: "Письмо 13",
        mailMessage: "Обновление пароля",
        sendingTime: 1627190400,
        sender: "security@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 4,
            title: "Помеченные",
        },
        optionalFolders: [],
        isMarked: false
    },
    {
        id: 19,
        title: "Письмо 14",
        mailMessage: "Письмо в папке Удаленные",
        sendingTime: 1627190400,
        sender: "user1@example.com",
        recipient: "user4@example.com",
        folder: {
            id: 3,
            title: "Удаленные",
        },
        optionalFolders: [],
        isMarked: false

    },

    {
        id: 20,
        title: "Письмо 15",
        mailMessage: "Новости и обновления",
        sendingTime: 1627190400,
        sender: "newsletter@example.com",
        recipient: "user1@example.com",
        folder: {
            id: 1,
            title: "Входящие",
        },
        optionalFolders: [],
        isMarked: false
    },
];