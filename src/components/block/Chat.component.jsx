const ChatComponent = () => {
    const messages = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur commodi cum cumque dignissimos dolorem ea eaque in ipsa iste, laudantium nesciunt non nulla optio pariatur possimus quas quod saepe sint ut voluptate, voluptatem.",
            timestamp: "18 Dec 2022, 9:57 AM",
            isSender: true,
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur.",
            timestamp: null,
            isSender: false,
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum fugit obcaecati praesentium recusandae tenetur.",
            timestamp: "18 Dec 2022, 1:05 PM",
            isSender: false,
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, dolorem doloremque ducimus ea, eos ipsam laudantium maxime minima modi necessitatibus odio officiis optio quam quibusdam quidem quo quos repellat reprehenderit saepe sapiente velit veritatis vero, voluptatem voluptatibus. Consequatur cupiditate error labore necessitatibus, officiis perferendis quam. Accusantium aut dolorum ea, eaque eveniet ex iste iusto non nostrum perspiciatis provident quisquam repellat, rerum, sint voluptatem. Accusamus amet architecto debitis delectus, dolor doloribus eveniet facilis hic laudantium maxime neque quaerat voluptatibus. Consequuntur harum nemo nesciunt omnis quibusdam quo sed totam ut. Consequuntur enim iste repellendus! Aperiam eum iure magnam minima perferendis, quidem.",
            timestamp: "20 Dec 2022, 10:03 AM",
            isSender: true,
        },
        {
            id: 5,
            image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
            timestamp: "20 Dec 2022, 10:05 AM",
            isSender: true,
        },
    ];

    return (
        <div className="grid p-6">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`mb-2 grid max-w-[60%] gap-1 ${msg.isSender ? "justify-self-end" : "justify-self-start"}`}
                >
                    {msg.text && (
                        <p
                            className={`break-all rounded-xl p-3 text-sm ${
                                msg.isSender
                                    ? "rounded-tr-none bg-muted"
                                    : "rounded-tl-none bg-foreground/10"
                            }`}
                        >
                            {msg.text}
                        </p>
                    )}
                    {msg.image && (
                        <img
                            className="cursor-pointer break-all rounded-xl rounded-tr-none bg-muted p-3"
                            src={msg.image}
                            alt=""
                        />
                    )}
                    {msg.timestamp && (
                        <span
                            className={`text-xs ${msg.isSender ? "justify-self-end" : "justify-self-start"}`}
                        >
                            {msg.timestamp}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ChatComponent;
