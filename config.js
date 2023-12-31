module.exports = {
    client: {
        token: "MTE2MjgxNzQzMjYyOTU2MzU2Mg.GFsHhe.XgenFv7pTuAmSUB2LJipAjd15NXPsEw8cS3c1g",
        id: "1162817432629563562",
    },
    handler: {
        prefix: "?",
        deploy: true,
        commands: {
            prefix: false,
            slash: true,
            user: true,
            message: true,
        },
        mongodb: {
            uri: "mongodb+srv://landabot:c5HdJA0XXNUxGAsy@db.ffbx5ly.mongodb.net/?retryWrites=true&w=majority",
            toggle: true,
        },
    },
    users: {
        developers: ["506378061240074251"],
    },
    development: { 
        enabled: true,
        guild: "1162813940120686663",
    }, 
    messageSettings: {
        nsfwMessage: "The current channel is not a NSFW channel.",
        developerMessage: "You are not authorized to use this command.",
        cooldownMessage: "Slow down buddy! You're too fast to use this command.",
        notHasPermissionMessage: "You do not have the permission to use this command.",
        notHasPermissionComponent: "You do not have the permission to use this component.",
        missingDevIDsMessage: "This is a developer only command, but unable to execute due to missing user IDs in configuration file."
    },
    embedSettings: {
        color: "#15122f",
    }
};
