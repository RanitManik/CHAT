import { assets } from "@/assets/assets.js";

const ContactSummaryComponent = () => {
    const contacts = [
        {
            name: "Ranit Manik",
            message:
                "Do you even have the slightest idea, bro? What the hell are you talking about? Google already has an in-built pre-scanning APK feature.",
            image: assets.user,
        },
        {
            name: "Sayak Bal",
            message:
                "I've completed the API integration. Let's discuss the next steps in our project later today.",
            image: assets.user,
        },
        {
            name: "Mohommad Ali",
            message:
                "Hey, have you checked the latest Flutter update? Some cool features have been added!",
            image: assets.user,
        },
        {
            name: "Partha Sarathi Manna",
            message:
                "Can we sync up tomorrow to go over the design changes? I think we need to adjust a few things.",
            image: assets.user,
        },
        {
            name: "Sayan Gupta",
            message:
                "Just reviewed the latest code push. Looks great, but we need to optimize the loading times.",
            image: assets.user,
        },
        {
            name: "Ankita Roy",
            message:
                "Let’s finalize the presentation slides by tonight. The deadline is approaching fast.",
            image: assets.user,
        },
        {
            name: "Arindam Das",
            message:
                "I found a new tool that might help us automate the testing process. Let's discuss it during our next meeting.",
            image: assets.user,
        },
        {
            name: "Debasish Sen",
            message:
                "The client is asking for a progress update. Do we have a draft ready?",
            image: assets.user,
        },
        {
            name: "Niladri Bhowmik",
            message:
                "I’ve fixed the bug we discussed earlier. Please review the changes and merge.",
            image: assets.user,
        },
        {
            name: "Tanushree Bose",
            message:
                "Can you share the database schema? I need it to complete the backend integration.",
            image: assets.user,
        },
    ];

    return (
        <div>
            {contacts.map((contact, index) => (
                <div
                    key={index}
                    className="flex h-20 cursor-pointer select-none items-center gap-4 border-b border-border py-2 pl-4 pr-4 transition-all last:border-none hover:bg-primary/10"
                >
                    <img
                        className="h-full object-cover py-2"
                        src={contact.image}
                        alt={`${contact.name} profile`}
                    />
                    <div className="flex flex-col justify-center">
                        <span className="text-lg">{contact.name}</span>
                        <p className="line-clamp-1 overflow-hidden text-ellipsis text-sm text-foreground/70">
                            {contact.message}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactSummaryComponent;
