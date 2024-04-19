function border(classSelected) {
    switch(classSelected.class) {
        case "stalwart":
            return "border-red-600";
        case "vagabond":
            return "border-yellow-500";
        case "mendicant":
            return "border-lime-500";
        case "wright":
            return "border-cyan-500";
        default:
            return "border-primary";
    }
}

function borderAccent(classSelected) {
    switch(classSelected.class) {
        case "stalwart":
            return "border-red-400";
        case "vagabond":
            return "border-yellow-300";
        case "mendicant":
            return "border-lime-300";
        case "wright":
            return "border-cyan-300";
        default:
            return "border-primary";
    }
}

function text(classSelected) {
    switch(classSelected.class) {
        case "stalwart":
            return "text-red-600";
        case "vagabond":
            return "text-yellow-500";
        case "mendicant":
            return "text-lime-500";
        case "wright":
            return "text-cyan-500";
        default:
            return "text-primary";
    }
}

function bg(classSelected) {
    switch(classSelected.class) {
        case "stalwart":
            return "bg-red-600";
        case "vagabond":
            return "bg-yellow-500";
        case "mendicant":
            return "bg-lime-500";
        case "wright":
            return "bg-cyan-500";
        default:
            return "bg-primary";
    }
}

const colorSwap = {
    border,
    borderAccent,
    text,
    bg
}

export default colorSwap;