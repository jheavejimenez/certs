export const schoolSchema = (firstName: string, lastName: string, course: string) => {
    return {
        "jsonLdContextUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.jsonld",
        "jsonSchemaUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.json",
        "typeName": "xampleSchema2",
        "credentialSubject": {
            "data": {
                "firstname": `${firstName}`,
                "lastname": `${lastName}`,
                "course": `${course}`
            }
        },
        "holderDid": "did:elem:EiBtBJadx-Ctmevx86uXK8oawF44Kz9Oj6yfZ1-TiRiMIg;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBek5HTmlOV0UwWmpkbE56WXhaamhqTlRCaVptRXhNMk15TWpFd01XWmtNbVl5T0RKbU1EQXdOV0U1TnpoalpHWmhaalF3WVdZMU56YzBOMkkwT1dSa1lTSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZeE1qSTJPV0ptT1RFMk56QXpPV0ZqTW1VMk5Ea3hPVFkwWVRVeU1XWXlOMll6TnpabE9XRmpabU14WVRKaU5USmhNVEl3TjJVNU9EYzBZV1ZsTm1NaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoibGNWYVJ1MWFxRnpZT0FfdERfVnpNZTAteXVadklpZFhxZWFuMktwR0tzd0s0b1pVVndqcmFMc3g5UE4yRk9wVTZic0QwTXhFTVA4Nm11YjcwOTBqN3cifQ"
    }
}

