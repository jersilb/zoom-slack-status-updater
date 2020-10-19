module.exports = [
  /**
   * You can add as many slack workspaces as you want here, just make sure
   * you have created an app for each of them.
   */
  {
    // this name can be anything and is only for you, it is not used in the app
    name: 'Gateway Staff Slack',
    /**
     * this is the email address of your zoom user
     * events are filtered and slack updates are only done for this user
     * remove, if filtering is not intended
     */
    email: 'jeremy.silbernagel@gatewaystaff.com',
    /**
     * either copy & paste the token string here or use
     * process.env.SLACK_TOKEN_1 (now secret add SLACK_TOKEN_1 "xoxp-xxx-xxx")
     */
    token: 'xoxp-3198132097-53439930118-1437987511010-8d6c4f349aacee9e7e7143f84ba40fc5',
    /**
     * Zoom Verification Token
     *
     * A verification token will be generated in the Feature page after you
     * enable and save the event subscription.
     *
     * @see https://marketplace.zoom.us/docs/api-reference/webhook-reference#headers
     */
    zoomVerificationToken: 'VqZthXxlSfadilUwNrtDZQ',
    /**
     * Slack DnD Status
     *
     * Turns on Do Not Disturb mode for the current user. Number of minutes,
     * from now, to snooze until.
     *
     * @see https://api.slack.com/methods/dnd.setSnooze
     */
    dndNumMinutes: 60,
    meetingStatus: {
      text: "On a Zoom Call",
      emoji: ':slack_call:', // emoji code
    },
    noMeetingStatus: {
      text: '',
      emoji: '',
    },
  },
]
