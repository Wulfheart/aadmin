<?php

namespace Wulfheart\Aadmin\Commands;

use Illuminate\Console\Command;

class AadminCommand extends Command
{
    public $signature = 'aadmin';

    public $description = 'My command';

    public function handle()
    {
        $this->comment('All done');
    }
}
