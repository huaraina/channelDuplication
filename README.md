# channelDuplication
it seems easy enough...

## a plugin to duplicate channels (perms, roles, etc. no messages though)

# TODO
- settings page (decide for roles, perms, both, etc etc..)
- the actual plugin
- channel creation (for now it will detect channel creation and then set perms upon prompting)
- command structure: "/channeldupe {id of channel to be duped}" -> cache the permissions
method for channel creation stuff

/channeldupe (plugin hears this and starts looking for channel creation in server)
*user creates channel\*
plugin notices channel creation and sends a confirm/deny popup to set permission overrides to be identical as other channel
if deny: stop asking
if confirm: set permissions