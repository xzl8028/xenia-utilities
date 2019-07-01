// Copyright (c) 2015-present Xenia, Inc. All Rights Reserved.
// See License.txt for license information.

package commands

import (
	"github.com/spf13/cobra"
)

type Command = cobra.Command

func Run(args []string) error {
	RootCmd.SetArgs(args)
	return RootCmd.Execute()
}

var RootCmd = &cobra.Command{
	Use:   "mmdev",
	Short: "Xenia dev utils cli",
	Long:  `Xenia cli to help in the development process`,
}
