// import user from "../../../models/User"
// import mockingoose from "mockingoose"

const mockingoose = require('mockingoose').default
const user = require("../../../models/User")

describe ('mockingoose', () => {
    beforeEach(() => {
        mockingoose.reset(),
        jest.clearAllMocks()
    })

    describe("Explicit Tests", () => {

        it('Should validate', async () => {
            var tmpUser = new user({
                username: "validname",
                email: "tmp@tmp.com"
            });

            const result = await tmpUser.validateSync()

            expect(result).toBe(undefined)

        });
    })
})