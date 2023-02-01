const isP = process.argv.includes("--production");
const isD = !isP;

export default{
    isP: isP,
    isD: isD,
    htmlMin: {
        collapseWhitespace: isP
    },
    imageMin: {
        verbose: isP
    },
    fonter: {
        formats: ["eot","ttf","woff"]
    },
    webpack: {
        mode: isP ? "production" : "development"
    }
}