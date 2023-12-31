const { UserContextMenuCommandInteraction, ContextMenuCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient.js');
const { embedSettings } = require('../../../config.js')

module.exports = {
    structure: new ContextMenuCommandBuilder()
        .setName('User Info')
        .setType(2),
    /**
     * @param {ExtendedClient} client 
     * @param {UserContextMenuCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const user = client.users.cache.get(interaction.targetId)
        if(!user) return interaction.reply({ content: '⚠️ Hubo un problema ejecutando el comando'})
    
        const embed = new EmbedBuilder()
            .setThumbnail(user.displayAvatarURL())
            .setTitle(`Información de ${user.username}`)
            .setDescription(`
**Nombre Global**     
${user.globalName || "No tiene nombre global (Es un Bot)"}
**Usuario**     
${user.username}
**ID**
${user.id}
**Bot**
${user.bot}
**Sistema**
${user.system}
**Roles**
${interaction.guild.members.cache.get(user.id).roles.cache.size || "No Roles!"}
**Avatar URL**
[Link](${user.displayAvatarURL()})
`)
            .setColor(embedSettings.color)

        await interaction.reply({ embeds: [embed], ephemeral: true });

    }
};