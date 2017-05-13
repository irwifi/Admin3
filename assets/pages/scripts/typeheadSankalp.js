empty: Handlebars.compile([
                '<div class="empty-message">'+
                  'Result not found'+
                '</div>',
              ].join('\n')),
            header: '<table class="table table-striped autoCompletetable" style="">'+
                   '<tr>'+
                    '<th class="tableName" width="10%">'+
                    'Name'+
                    '</th>'+
                    '<th class="tableAddress" width="10%">Address</th>'+
                    '<th class="tableEmail" width="10%">Email</th>'+
                    '<th class="tableAccount" width="10%">Account</th>'+
                    '<th class="tableBalanceDate" width="10%">Last Balance Date</th>'+
                    '<th class="tableBalanceDue" width="10%">Last Balance Due</th>'+
                    '<th class="tablePayment" width="10%">Payment</th>'+
                    '<th class="tableAccountStatus" width="10%" style="display:none;">Account Status</th>'
                   '</tr></table>',

            suggestion: Handlebars.compile([
                    '<table  class="table table-striped autoCompletetable" style="">',
                    '<tr class="notfirst" data-firstname="{{first_name}}" data-lastname="{{last_name}}" data-address="{{address}}" data-email="{{email}}" data-account="{{account}}" data-lastbalanceDate="{{lastbalenceDate}}" data-lastbalanceDue="{{lastBalanceDue}}" data-bugetbilling="{{buget_billng}}" data-credit="{{credit}}" data-lat="{{lat}}" data-lng="{{lng}}" data-n2="{{n}}">',
                        '<td class="tableName" width="10%">',
                            '{{first_name}} {{last_name}}',
                        '</td>',
                        '<td class="tableAddress" width="10%">',
                            '{{address}} ',
                        '</td>',
                        '<td class="tableEmail" width="20%">',
                            '{{email}} ',
                        '</td>',
                        '<td  class="tableAccount" width="10%">',
                            '{{account}} ',
                        '</td>',
                        '<td class="tableBalanceDate" width="10%">',
                            '{{lastbalenceDate}} ',
                        '</td>',
                        
                        '<td class="tablePayment" width="10%">',
                            '<i class="fa fa-credit-card"></i> ',
                        '</td>',
                        '<td class="tableAccountStatus" style="display:none;" width="10%">',
                            '{{AccountStatus}} ',
                        '</td>',

                        '<td class="tableCollectionStatus" width="10%">',
                            ' {{CollectionStatus}}',
                        '</td>',
                        '<td class="tablebugetbillingblog" width="10%">',
                            '{{bugetbillingblog}} ',
                        '</td>',
                        '<td class="AccountStatus" width="10%">',
                            '{{AccountStatus}} ',
                        '</td>',
                       
                    '</tr></table>',
            ].join('')),