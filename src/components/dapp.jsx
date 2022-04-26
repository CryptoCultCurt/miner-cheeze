import React from 'react';

const Dapp = () => {

    return (<div>
        <div class="div-block-1201">
            <div class="form-block w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get">
                    <div class="columns w-row">
                        <div class="column-2 w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="name" class="field-label-3">Contract Balance:</label></div>
                        <div class="w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email-2" class="field-label">651,591,234,349</label></div>
                    </div>
                    <div class="columns w-row">
                        <div class="column-2 w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email" class="field-label-4">Your Cheeze:</label></div>
                        <div class="w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email" class="field-label">1,156</label></div>
                    </div>
                    <div class="columns w-row">
                        <div class="column-2 w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email" class="field-label-5">Mice:</label></div>
                        <div class="w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email" class="field-label">55,123,289</label></div>
                    </div>
                    <div class="columns w-row">
                        <div class="column-2 w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email" class="field-label-5">Your Pending Rewards:</label></div>
                        <div class="w-col w-col-6 w-col-small-6 w-col-tiny-6"><label for="email" class="field-label">0</label></div>
                    </div>
                    <div class="columns-2 w-row">
                        <div class="w-col w-col-6"><input type="number" class="w-input" maxlength="256" name="Amount" data-name="Amount" placeholder="10.0" id="Amount" required="" /></div>
                        <div class="w-col w-col-6"><input type="submit" value="Buy" data-wait="Please wait..." class="w-button" /></div>
                    </div>
                </form>
                <div class="w-form-done"><div>This is just a test form and nothing happened!</div></div>
                <div class="w-form-fail"><div>This form isn&#x27;t enabled yet so it&#x27;s not going to do anything.</div></div>
            </div>
        </div>
    </div>
    )
}

export default Dapp;
